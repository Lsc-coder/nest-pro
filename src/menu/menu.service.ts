import { Injectable } from '@nestjs/common';

import { CreateMenuDto } from './menu.dto';

@Injectable()
export class MenuService {
  private readonly CreateMenuDtos: CreateMenuDto[] = [];

  create(CreateMenuDto: CreateMenuDto) {
    this.CreateMenuDtos.push(CreateMenuDto);
  }

  findAll(): CreateMenuDto[] {
    return this.CreateMenuDtos;
  }
  remove(): CreateMenuDto[] {
    return this.CreateMenuDtos;
  }
  update(): CreateMenuDto[] {
    return this.CreateMenuDtos;
  }
}
