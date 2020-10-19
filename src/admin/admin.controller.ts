import { Controller, Get, Post, Req, HttpCode, Redirect, Query, Param } from '@nestjs/common';

@Controller({ host: 'admin.example.com' })
export class AdminController {
  @Get()
  index(): string {
    return 'Admin page';
  }
}