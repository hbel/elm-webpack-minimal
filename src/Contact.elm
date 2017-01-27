module Contact exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick, onInput)


type alias Model =
    { name : String
    , invalid : Bool
    }


initialModel =
    { name = ""
    , invalid = True
    }


type Msg
    = Change String
    | Send


update : Msg -> Model -> Model
update msg model =
    case msg of
        Change newContent ->
            { model | name = newContent, invalid = (String.isEmpty newContent) }

        Send ->
            model


view : Model -> Html Msg
view model =
    div []
        [ input [ placeholder "Enter a name", onInput Change ] []
        , button [ disabled model.invalid, onClick Send ] [ text "Send" ]
        ]
