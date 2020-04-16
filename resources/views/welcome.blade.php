@extends('layouts.app')

@section('title', 'Page Title')


@section('content')
    <div>
        <span>These are two Vue custom form input components. They sync all of their properties, attributes, and data with a local data object called State.</span> <br /><br /><br />
        <span>State is like a JSON browser running in your browser. It makes it easier to not only share data across different components in your app, but it can be used to send data to the server too.</span> <br /><br /><br />
        <form-input label="text" input-id="testInput" name="text" type="text"  order=1></form-input>
        <form-input label="password" input-id="testPassword" name="password" type="password" order=2></form-input> <br /><br /><br />

        <form-basic-display></form-basic-display>
        <span>This is a different component that checks the State Store for the input props and values</span> <br /><br /><br />
    </div>

@endsection
<script>

</script>
