@extends('layouts.app')

@section('title', 'Page Title')


@section('content')
    <div style="width: 100%;text-align: center">

        <h5>Basic Display</h5>
        <form-basic-input></form-basic-input>
    </div>
    <div style="width: 100%;text-align: center">
        <h5>Form Builder</h5>
        <form-basic></form-basic>
    </div>
    <div style="width: 100%;text-align: center">
        <h5>Form Editor</h5>
        <form-basic-edit></form-basic-edit>
    </div>

@endsection
<script>

</script>
