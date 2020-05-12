<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class InPatient extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('in_patients', function (Blueprint $table) {
            $table->bigIncrements('in_p_id');
            $table->string('in_p_s', 30);
            $table->string('in_p_name', 110);
            $table->string('in_p_sex', 15);
            $table->integer('in_p_age');
            $table->string('in_p_phone', 30);
            $table->string('in_p_guardian_name', 60);
            $table->string('in_p_guardian_phone', 30);
            $table->string('in_p_blood', 10);
            $table->string('in_p_height', 50);
            $table->string('in_p_weight', 50);
            $table->string('in_p_bp', 50);
            $table->string('in_p_symptoms', 50);
            $table->string('in_p_address', 110);
            $table->dateTime('in_p_admission_date', 0);
            $table->string('in_p_case', 110);
            $table->string('in_p_casualty', 10);
            $table->string('in_p_old_patient', 10);
            $table->string('in_p_reference', 60);
            $table->unsignedBigInteger('in_p_doc_id');
            $table->unsignedBigInteger('in_p_bed_category_id');
            $table->unsignedBigInteger('in_p_bed_id');
            $table->string('in_p_note', 220);

            $table->foreign('in_p_doc_id')
                ->references('doc_id')->on('doctors')
                ->onDelete('cascade');
            $table->foreign('in_p_bed_category_id')
                ->references('bed_category_id')->on('bed_categories')
                ->onDelete('cascade');
            $table->foreign('in_p_bed_id')
                ->references('bed_id')->on('beds')
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
        Schema::dropIfExists('in_patients');
    }
}
