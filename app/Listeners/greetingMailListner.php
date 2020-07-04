<?php

namespace App\Listeners;

use App\Event\registrationEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Mail;
use App\Mail\registrationGreetings; 

class greetingMailListner
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  registrationEvent  $event
     * @return void
     */
    public function handle(registrationEvent $event)
    {
        Mail::to($event->email)->send(new registrationGreetings());        
    }
}
