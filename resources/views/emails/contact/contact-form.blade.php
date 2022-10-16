@component('mail::message')
# Bonjour,

Vous avez reçu un message de la part de {{$data['name']}}, {{$data['email']}}.

Son message est:
{{$data['message']}}

Thanks,<br>
{{ config('app.name') }}
@endcomponent
