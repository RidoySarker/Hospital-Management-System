<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePrescriptionMedicinesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prescription_medicines', function (Blueprint $table) {
            $table->bigIncrements('prescription_m_id');
            $table->unsignedBigInteger('prescription_id');
            $table->unsignedBigInteger('prescription_medicine_id');
            $table->string('prescription_medicine_time', 45);
            $table->timestamps();
            $table->foreign('prescription_id')
                ->references('prescription_id')->on('prescriptions')
                ->onDelete('cascade');
            $table->foreign('prescription_medicine_id')
                ->references('med_id')->on('medicines')
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
        Schema::dropIfExists('prescription_medicines');
    }
}
