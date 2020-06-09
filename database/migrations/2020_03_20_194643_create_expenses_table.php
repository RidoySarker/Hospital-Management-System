<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExpensesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('expenses', function (Blueprint $table) {
            $table->bigIncrements('exp_id');
            $table->string('exp_date',45);
            $table->unsignedBigInteger('exp_cat_id');
            $table->integer('exp_amount');
            $table->string('exp_details', 110);
            $table->timestamps();
            $table->foreign('exp_cat_id')
                ->references('exp_cat_id')->on('expense_categories')
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
        Schema::dropIfExists('expenses');
    }
}
