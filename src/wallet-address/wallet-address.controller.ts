/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { WalletAddressService } from './wallet-address.service';
import { WalletAddress } from './wallet-address.entity';

@Controller('wallet-address')
export class WalletAddressController {
  constructor(private readonly walletAddressService: WalletAddressService) {}

  @Post()
  create(@Body() walletAddress: Partial<WalletAddress>) {
    return this.walletAddressService.create(walletAddress);
  }

  @Get()
  findAll() {
    return this.walletAddressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.walletAddressService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() walletAddress: Partial<WalletAddress>) {
    return this.walletAddressService.update(id, walletAddress);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.walletAddressService.remove(id);
  }
}

