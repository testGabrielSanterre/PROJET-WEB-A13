@extends('base')

@section('title')
	Titre
@stop

@section('description')
	description
@stop

@section('page')
	@include('header')
	@section('content')
		@include('footer')
	@show
@stop