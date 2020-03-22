<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->bigIncrements('p_id');
            $table->string('p_name', 110);
            $table->integer('p_age');
            $table->string('p_address', 110);
            $table->string('p_phone', 30);
            $table->tinyInteger('p_sex');
            $table->string('p_blood', 45);
            $table->string('p_img', 110);
            $table->unsignedBigInteger('p_doc_id');
            $table->foreign('p_doc_id')
                ->references('doc_id')->on('doctors')
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
        Schema::dropIfExists('patients');
    }
}