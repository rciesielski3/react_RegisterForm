Stwórz Formularz rejestracyjny

Treść zadania:
Celem tej pracy domowej jest stworzenie formularza rejestracyjnego dla szkoły programowania, używając React,  zod do walidacji danych oraz react-hook-form do obsługi formularza. Formularz powinien umożliwić użytkownikowi wprowadzenie danych osobowych, preferencji dotyczących kursu, załączenie CV w formacie obrazu oraz informacji o doświadczeniu w programowaniu. Po przesłaniu formularza, dane powinny zostać zweryfikowane, a następnie wyświetlone w modalu. Do stylowania użyj CSS w JS lub CSS modules. 

Wytyczne:
Dane osobowe: Użytkownik podaje swoje imię, nazwisko, adres e-mail oraz numer telefonu.

Walidacja:
Imię - minimum 3 znaki.
Nazwisko - minimum 3 znaki.
E-mail - poprawny adres e-mail.
Numer telefonu - 9 cyfr.

Preferencje kursu: 
Użytkownik wybiera formę nauki (stacjonarnie lub online) oraz przynajmniej jedną preferowaną technologię spośród dostępnych opcji.

Załączanie CV: 
Użytkownik musi załączyć swoje CV w formie zdjęcia (format: JPEG lub PNG). System waliduje typ przesłanego pliku.
Doświadczenie w programowaniu: Użytkownik ma możliwość zaznaczenia, czy posiada doświadczenie w programowaniu. Jeśli tak, może dodać jedną lub więcej technologii programowania wraz z poziomem zaawansowania. Lista doświadczeń nie może być pusta, jeśli użytkownik zaznaczy, że posiada doświadczenie.

Przesłanie formularza:
Po wypełnieniu formularza, dane są walidowane zgodnie ze schematem zod. Jeśli walidacja przebiegnie pomyślnie, formularz jest przesyłany, a dane wyświetlane są w modalu. W przypadku błędów, użytkownik zostanie o nich poinformowany.

Wygląd formularza:
Upewnij się, że wygląd formularza jest spójny i estetyczny, aby zapewnić pozytywne wrażenia użytkownika oraz łatwą nawigację.
