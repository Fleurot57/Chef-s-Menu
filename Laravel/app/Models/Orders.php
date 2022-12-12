<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    protected $fillable = [
        'entree',
        'plat',
        'dessert'
    ];

    private string $entree;
    private string $plat;
    private string $dessert;

}
