@extends('layouts.app')

@section('title', 'Page Title')


@section('content')
    <div>
        <form-section section-id="test-section" order="1" flex-cols="1">
            <edit-mode></edit-mode>
            <add-input></add-input>
            {{-- <form-input label="text" input-id="testInput" name="text" type="text" order=1></form-input>
            <form-input label="password" input-id="testPassword" name="password" type="password" order=2></form-input>--}}
        </form-section>

       {{-- <form-basic-display></form-basic-display>--}}
    </div>

@endsection
<script>

</script>
