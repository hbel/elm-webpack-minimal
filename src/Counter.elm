module Counter exposing (..)

import Html exposing (..)
import Html.Events exposing (onClick)


type alias Model =
    { count : Int
    , inc : Int
    , dec : Int
    }


initialModel =
    { count = 0
    , inc = 0
    , dec = 0
    }


type Msg
    = Increment
    | Decrement


update : Msg -> Model -> Model
update msg model =
    case msg of
        Increment ->
            { model | inc = model.inc + 1, count = model.count + 1 }

        Decrement ->
            { model | dec = model.dec + 1, count = model.count - 1 }


view : Model -> Html Msg
view model =
    div []
        [ button [ onClick Decrement ] [ text "-" ]
        , div [] [ text (toString model.count) ]
        , button [ onClick Increment ] [ text "+" ]
        , h3 [] [ text ("Increment count: " ++ (toString model.inc)) ]
        , h3 [] [ text ("Decrement count: " ++ (toString model.dec)) ]
        ]
