<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBedAllotmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bed_allotments', function (Blueprint $table) {
            $table->bigIncrements('bed_allot_id');
            $table->string('bed_allot_p_id');
            $table->unsignedBigInteger('bed_allot_category_id');
            $table->date('bed_allot_start');
            $table->date('bed_allot_discharge');
            $table->string('bed_allot_status', 50);
            $table->timestamps();
            $table->foreign('bed_allot_category_id')
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
        Schema::dropIfExists('bed_allotments');
    }
}
