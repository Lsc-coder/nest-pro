import {
  Controller,
  Get,
  Req,
  Post,
  HttpCode,
  Header,
  Param,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateMenuDto } from './menu.dto';
import { MenuService } from './menu.service';

@Controller('menu')
export class MenuController {
  constructor(private MenuService: MenuService) {}
  @Get('list')
  @Header('Cache-Control', 'none')
  getAllMenu() {
    return this.MenuService.findAll();
  }
  @Get(':id')
  findOne(@Param() params: any): string {
    const { id } = params;
    return `This action returns a #${id} cat`;
  }
  @Post('')
  @HttpCode(200)
  createMenu(@Body() createCatDto: CreateMenuDto) {
    return this.MenuService.create({
      id: 'string',
      age: 3,
      breed: 'string',
    });
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: CreateMenuDto) {
    return this.MenuService.update();
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.MenuService.update();
  }
}
