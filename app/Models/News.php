<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class News extends Model
{
    protected $guarded = [];

    protected $casts = [
        'datePublished' => 'datetime'
    ];



    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
}
