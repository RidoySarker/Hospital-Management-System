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
            $table->integer('bed_allot_bed_id');
            $table->integer('bed_allot_p_id');
            $table->date('bed_allot_start');
            $table->date('bed_allot_discharge');
            $table->integer('patients_p_id');
            $table->timestamps();
            $table->foreign('bed_allot_p_id')
                ->references('p_id')->on('patients')
                ->onDelete('cascade');
            $table->foreign('bed_allot_bed_id')
                ->references('bed_id')->on('beds')
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
