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
        Schema::create('adressen', function (Blueprint $table) {
            $table->id();
            $table->integer("huisnummer");
            $table->char("bijvoeging", 3);
            $table->foreignId("straat_id")->constrained("straten");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('adressen');
    }
};
