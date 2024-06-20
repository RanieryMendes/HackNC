# Are You OK, Bud?

[![Watch the video](https://img.youtube.com/vi/Y0g2gnqBHJ0/0.jpg)](https://youtu.be/Y0g2gnqBHJ0)

## Inspiration
The very high rates of depression and anxiety among college students and the youth in general. There is a lack of direct method of care and communication on a daily base between the patient and the healthcare provider. This website eases this process by providing such providers like therapists to have first hand feedback on their patients.

## What it does
The user periodically writes a diary on the "Are you ok bud?" website which then is taken and assessed by our sentiment NLP to understand the feelings being evoked in the text file. It then outputs a score from -1 to 1 from most negative to most positive respectively. After that, we created a urgency function that takes this output and states how urgent should the user's therapist/psychiatrist see these results and text file (this process can be seen in the thumbnail). Based on the Urgency Index we automatically send a personalized email to the user's therapist/psychiatrist with the user's text file (with the key sentiment words highlighted), NLP result and the Urgency Index.

## How we built it
The NLP instance of our project was built by the assumption that we should a) prioritize negative results and b) the higher the urgency index, the more an email is required. We leverage the following techniques:

When it comes to the web platform we developed, we aimed to design an interactive but straightforward platform, such that users could feel completely comfortable when logging their thoughts and feelings. We leverage Google's firestore firebase for authentication - and sign-in - and database purposes. We opted for utilizing a cloud storage tool in order to ensure a great reliability/resilience of our product as well as Google's firestore provide good documentation and easy access for cloud beginners -which is our case. To develop our front-end we used ReactJS along with some design libraries like material UI and react-bootstrap, a routing library (react-router-dom).

## Challenges we ran into
In terms of web development, one core challenge was our attempt to fully integrate our nlp instance into the website's. Our plan was to leverage google cloud functions, however, we could not since it was charged.

## Natural Language Processing (NLP)
We used the Natural Language Toolkit libraries to conduct our NLP. Specifically the VADER sentiment analysis tool. We first pre-processed the diary entries by tokenizing each sentence. The VADER tool has the best performance when given short pieces of text. This is because the tool was initially trained on Tweeter entries. Once the text has been tokenized, we calculate the polarity score of each sentence. The polarity score has 4 categories (negative, positive, neutral, and Compound). The first three scores are from a scale from 0 to 1 and the Compound score takes the weight of each of the scores and assigns the text a number between -1 to 1. A score closer to -1 is a sentence with a more negative sentiment and a score of 1 indicates a positive sentiment. We also print for each sentence in the file if it has positive sentiment using our is_positive function. For each file in the text we print the average score for each category. From these scores we can garner the overall sentiment of each diary entry. We also take the total average compound score of all the sentences in the text, and graph it on our Urgency Index Graph.

## Accomplishments that we're proud of
The mental health of students should be a priority for universities, and our project is a step forward in helping students in dire need. We are proud of utilizing our skills in NLP, Web development, and Mathematical graphing to help those in need of a helping hand.

## What we learned
That sleeping is not for this profession. How to use VADER tool kit through NLTK. Using Google Cloud firestore and using react js for web development.

## What's next for Are you ok bud?
We want to integrate voice recognition and speech to text software so that the user no longer has to write the entries and can speak them instead. Also, we would like to expand some of the functionalities of the website such that an option for users to send direct messages to their psychologists/therapists. We intend to do that using another service, which is provided by google firebase as well. Finally, we aim to integrate the NLP instance of our project in a better way by using google's cloud function service.

## Built With
![firebase](https://img.icons8.com/color/48/000000/firebase.png)
![google](https://img.icons8.com/color/48/000000/google-logo.png)
![javascript](https://img.icons8.com/color/48/000000/javascript.png)
![python](https://img.icons8.com/color/48/000000/python.png)
![react](https://img.icons8.com/color/48/000000/react-native.png)


## Ownership 
This project was developed in collaboration with Ariel J. Aizpurua and J Pinheiro for the HackNC 2022. I was responsible for building all the front-end and cloud (firebase) part. 
