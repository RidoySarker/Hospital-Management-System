<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLabReportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lab_reports', function (Blueprint $table) {
            $table->bigIncrements('lab_id');
            $table->unsignedBigInteger('lab_p_id');
            $table->unsignedBigInteger('lab_doc_id');
            $table->date('lab_date');
            $table->string('lab_file', 110);
            $table->timestamps();
            $table->foreign('lab_p_id')
                ->references('out_p_id')->on('out_patients')
                ->onDelete('cascade');
            $table->foreign('lab_doc_id')
                ->references('doc_id')->on('doctors')
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
        Schema::dropIfExists('lab_reports');
    }
}
