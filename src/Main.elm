module Main exposing (..)

import Html exposing (Html, program)
import Contact
import Counter


type alias AModel =
    { counter :
        Counter.Model
    , contact : Contact.Model
    }


type Msg
    = CounterMsg Counter.Msg
    | ContactMsg Contact.Msg


update : Msg -> AModel -> ( AModel, Cmd Msg )
update msg model =
    case msg of
        CounterMsg sub ->
            let
                res =
                    Counter.update sub model.counter
            in
                ( { model | counter = res }, Cmd.none )

        ContactMsg sub ->
            let
                res =
                    Contact.update sub model.contact
            in
                ( { model | contact = res }, Cmd.none )


view : AModel -> Html Msg
view model =
    Html.div []
        [ Html.map CounterMsg (Counter.view model.counter)
        , Html.map ContactMsg (Contact.view model.contact)
        ]


initialModel =
    { counter =
        Counter.initialModel
    , contact = Contact.initialModel
    }


init : ( AModel, Cmd Msg )
init =
    ( initialModel, Cmd.none )


subscriptions : AModel -> Sub Msg
subscriptions model =
    Sub.none


main : Program Never AModel Msg
main =
    program
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
