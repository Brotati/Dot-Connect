<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    function post(Request $req){

        $post= new Post;
        $post->post=$req->input('post');
        $post->file_path=$req->file('file')->store('shareItems');
        $post->save();
        return $post;

    }
}
