<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('group_users', function (Blueprint $table) {
            $table->id();
            $table->string('status', 25);
            $table->string('role', 25);
            $table->string('token', 1024)->nullable();
            $table->timestamp('token_expire')->nullable();
            $table->timestamp('token_used')->nullable();
            $table->unsignedBigInteger('user_id')->nullable(false);
            $table->unsignedBigInteger('created_by_id')->nullable(false);
            $table->unsignedBigInteger('group_id')->nullable(false);
            $table->timestamp('created_at')->nullable();

            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->foreign('created_by_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->foreign('group_id')
                ->references('id')
                ->on('groups')
                ->onDelete('cascade')
                ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('group_users');
    }
};
