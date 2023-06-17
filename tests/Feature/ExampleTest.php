<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    // public function testBasicTest()
    // {
    //     $response = $this->get('/');

    //     $response->assertStatus(200);
    // }
    public function testBasicTest()
    {
        $response = $this->get('/');

        $response->assertStatus(302); // Assert initial redirection

        $redirectTarget = $response->getTargetUrl();
        $response = $this->get($redirectTarget); // Follow the redirection

        $response->assertStatus(200); // Assert the final status code
    }

}
