<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatientExpensesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patient_expenses', function (Blueprint $table) {
            $table->bigIncrements('p_exp_id');
            $table->unsignedBigInteger('p_service_id');
            $table->timestamps();
            $table->foreign('p_service_id')
                ->references('service_id')->on('services')
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
        Schema::dropIfExists('patient_expenses');
    }
}
