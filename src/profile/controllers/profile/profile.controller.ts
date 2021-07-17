import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Observable, of } from 'rxjs';
import { JwtAuthGuard } from 'src/shared/auth/guards/jwt-auth.guard';
import { IUser } from 'src/shared/user/interfaces';

@Controller('profile')
export class ProfileController {
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get()
  getProfile(@Request() req): Observable<{ user: IUser }> {
    return of(req.user as { user: IUser });
  }
}
