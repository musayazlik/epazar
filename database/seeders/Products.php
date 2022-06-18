<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Products extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    DB::table("products")->insert([
      [
        'title' => 'Hıyar Badem Paket Kg',
        'price' => 9.95,
        'category' => 1,
        'image' => 'salatalık.jpg',
        'description' => 'Yeni madeni hıyar badem paketi',
        'created_at' => now(),
        'updated_at' => now(),
      ],
      [
        'title' => 'Domates Kokteyl Kg',
        'price' => 16.95,
        'category' => 1,
        'image' => 'domates-salkim.jpg',
        'description' => 'Kahvaltı sofralarına, sandviç ve yemeklere lezzet katan Domates Kokteyl, minyatür bir ürün olması nedeniyle lezzetinin yanında, sofra sunumlarında da şık bir görünüm sergiliyor.',
        'created_at' => now(),
        'updated_at' => now(),
      ],
      [
        'title' => 'Dana Kıymalık Kg',
        'price' => 120.47,
        'category' => 2,
        'image' => 'DanaKıymalık.jpg',
        'description' => 'Dana Yemeklik Et, dananın döş etinden alınır. Kalın yağları, kaba zarları ve sinirleri temizlendikten sonra çekilen dana kıyma, Izgara köfte ve tencere yemeklerine uygundur. ',
        'created_at' => now(),
        'updated_at' => now(),
      ],
      [
        'title' => 'Banvit Piliç Baget Kg',
        'price' => 52.72,
        'category' => 2,
        'image' => 'BanvitPiliçBaget.jpg',
        'description' => 'Banvit Piliç Baget, derili ve kemikli alt buttan elde edilir. Son derece lezzetli olan piliç bageti, soslayıp elma dilim patateslerle fırında pişirebilir; hızlı ve leziz bir öğün hazırlayabilirsiniz. ',
        'created_at' => now(),
        'updated_at' => now(),
      ],
      [
        'title' => 'Lays Baharatlı Patates Cipsi',
        'price' => 13.95,
        'category' => 3,
        'image' => 'LaysBaharatlıPatatesCipsi.jpg',
        'description' => 'Özenle yetiştirilen patatesler ince bir şekilde dilimlenerek %100 ayçiçek yağında pişirilmiş ve en çıtır halini almıştır. Doğal patateslerden ve çeşitli baharatların birleşiminden üretilerek yenilenmiş halini daha da çok seveceksiniz. ',
        'created_at' => now(),
        'updated_at' => now(),
      ],
      [
        'title' => 'Ülker Bitter Kare Çikolata',
        'price' => 8.95,
        'category' => 3,
        'image' => 'ÜlkerBitterKareÇikolata.jpg',
        'description' => 'Kakao kitlesi, şeker, kakao tozu, sade yağ (süt), emülgatörler (soya lesitini, poligliserol polirisinoleat), aroma verici. Kakao kuru maddesi en az %80?dır. Eser miktarda yer fıstığı, sert kabuklu meyveler, yumurta ürünü ve gluten içerebilir. Domuz yağı ve katkıları içermez.',
        'created_at' => now(),
        'updated_at' => now(),
      ],
      [
        'title' => 'Doğadan Earl Grey Demlik Poşet Çay ',
        'price' => 61.95,
        'category' => 4,
        'image' => 'DoğadanEarlGreyDemlikPoşetÇay.jpg',
        'description' => 'Kakao kitlesi, şeker, kakao tozu, sade yağ (süt), emülgatörler (soya lesitini, poligliserol polirisinoleat), aroma verici. Kakao kuru maddesi en az %80?dır. Eser miktarda yer fıstığı, sert kabuklu meyveler, yumurta ürünü ve gluten içerebilir. Domuz yağı ve katkıları içermez.',
        'created_at' => now(),
        'updated_at' => now(),
      ],
    ]);
  }
}
