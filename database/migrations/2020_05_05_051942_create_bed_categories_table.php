<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBedCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bed_categories', function (Blueprint $table) {
            $table->bigIncrements('category_id');
            $table->string('category_name', 110);
            $table->string('category_details', 110);
            $table->unsignedBigInteger('category_floor_id');
            $table->foreign('category_floor_id')
                ->references('floor_id')->on('floors')
                ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bed_categories');
    }
}
