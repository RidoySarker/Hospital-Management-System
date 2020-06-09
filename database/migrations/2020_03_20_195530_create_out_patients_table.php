<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOutPatientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('out_patients', function (Blueprint $table) {
            $table->bigIncrements('out_p_id');
            $table->string('out_p_s', 30);
            $table->string('out_p_name', 110);
            $table->string('out_p_sex', 15);
            $table->integer('out_p_age');
            $table->string('out_p_phone', 30);
            $table->string('out_p_blood', 10);
            $table->string('out_p_height', 50);
            $table->string('out_p_weight', 50);
            $table->string('out_p_bp', 50);
            $table->string('out_p_symptoms', 50);
            $table->string('out_p_address', 110);
        
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
        Schema::dropIfExists('out_patients');
    }
}
