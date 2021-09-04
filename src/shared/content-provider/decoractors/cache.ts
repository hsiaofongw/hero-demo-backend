const memCache: Record<string, Record<string, any>> = {};

export type CacheOption = {
  namespace: string;
};

interface ToString {
  toString(): string;
}

export function CacheStaleWhileRevalidate<T extends ToString>(
  option: CacheOption,
) {
  return (
    target: any,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<(key: T) => Promise<any>>,
  ) => {
    memCache[option.namespace] = {};
    const cache = memCache[option.namespace];
    const originFn = descriptor.value;
    descriptor.value = async function (key: T) {
      const cacheKey = key.toString();

      const cacheKeyUpdate = async () =>
        (cache[cacheKey] = await originFn.call(this, key));

      if (!!cache[cacheKey]) {
        setTimeout(cacheKeyUpdate, 0);
        return cache[cacheKey];
      }

      await cacheKeyUpdate();
      return cacheKey[cacheKey];
    };
  };
}
