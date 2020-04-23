@extends('layouts.app')

@section('title', 'Page Title')


@section('content')

    <div>
        <edit-mode></edit-mode>
        <fe-form>
                <add-input></add-input>
                {{-- <form-input label="text" input-id="testInput" name="text" type="text" order=1></form-input>
                <form-input label="password" input-id="testPassword" name="password" type="password" order=2></form-input>--}}
        </fe-form>


       {{-- <form-basic-display></form-basic-display>--}}
    </div>

@endsection
<script>

</script>
