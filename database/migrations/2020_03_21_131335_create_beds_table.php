<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBedsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('beds', function (Blueprint $table) {
            $table->bigIncrements('bed_id');
            $table->unsignedBigInteger('bed_category_id');
            $table->integer('bed_capacity');
            $table->string('bed_charge', 110);
            $table->string('bed_status', 50);
            $table->timestamps();
            $table->foreign('bed_category_id')
                ->references('bed_category_id')->on('bed_categories')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('beds');
    }
}
