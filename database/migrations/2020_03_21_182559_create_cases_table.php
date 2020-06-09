<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCasesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cases', function (Blueprint $table) {
            $table->bigIncrements('case_id');
            $table->unsignedBigInteger('case_p_id');
            $table->string('case_details', 200);
            $table->string('case_file', 110);
            $table->date('case_date');
            $table->timestamps();
            $table->foreign('case_p_id')
                ->references('out_p_id')->on('out_patients')
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
        Schema::dropIfExists('cases');
    }
}
