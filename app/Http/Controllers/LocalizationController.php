<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App;
use session;

class LocalizationController extends Controller
{
    function lang(Request $request)
    {
    	$locale=$request->lang;
    	App::setLocale($locale);
        session()->put('locale', $locale);
        return redirect()->back();	
    }
}
