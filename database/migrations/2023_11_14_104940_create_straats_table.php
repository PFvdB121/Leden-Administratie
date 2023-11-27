<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('straten', function (Blueprint $table) {
            $table->id();
            $table->string("naam");
            $table->foreignId("stad_id")->constrained("steden");
            $table->unique(["naam", "stad_id"]);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('straten');
    }
};
