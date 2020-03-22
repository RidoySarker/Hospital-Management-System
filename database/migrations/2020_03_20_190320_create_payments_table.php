<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->bigIncrements('pay_id');
            $table->string('pay_bill_no', 45);
            $table->unsignedBigInteger('pay_p_id');
            $table->unsignedBigInteger('pay_doc_id');
            $table->integer('pay_sub_total');
            $table->integer('pay_discount');
            $table->integer('pay_gross_amount');
            $table->integer('pay_paid');
            $table->string('pay_note', 45);
            $table->timestamps();
            $table->foreign('pay_p_id')
                ->references('p_id')->on('patients')
                ->onDelete('cascade');
            $table->foreign('pay_doc_id')
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
        Schema::dropIfExists('payments');
    }
}
