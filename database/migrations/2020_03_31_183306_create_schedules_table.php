<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSchedulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('schedules', function (Blueprint $table) {
            $table->bigIncrements('sd_id');
            $table->unsignedBigInteger('sd_d_id');
            $table->string('sd_available_days', 100);
            $table->string('sd_start_time', 100);
            $table->string('sd_end_time', 100);
            $table->string('sd_per_p_time', 100);
            $table->string('sd_status', 100);
            $table->timestamps();
            $table->foreign('sd_d_id')->references('doc_id')->on('doctors')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('schedules');
    }
}
