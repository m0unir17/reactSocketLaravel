<?php

namespace App\Http\Controllers;

use App\Events\Hello;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public function test(Request $request)
    {
        broadcast(new Hello($request->phrase));
    }
}
