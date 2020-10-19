import { Controller, Get, Post, Req, HttpCode, Redirect, Query, Param } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Post()
  // @HttpCode(204)
  // @Header('Cache-Control', 'none')
  create(@Req() request: Request): string {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }

}
