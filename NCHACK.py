#Install Instructions 
#python3 -m pip install nltk
#https://realpython.com/python-nltk-sentiment-analysis/
#https://www.nltk.org/api/nltk.tokenize.html

import nltk
import sys
import numpy as np
import matplotlib.pyplot as plt
from matplotlib import interactive
from nltk.corpus import brown
from nltk.sentiment import SentimentIntensityAnalyzer
from random import shuffle
from nltk import tokenize
from nltk.tokenize import sent_tokenize, word_tokenize

nltk.download([
 "names",
"stopwords",
"state_union",
"twitter_samples",
"movie_reviews",
"averaged_perceptron_tagger",
"vader_lexicon",
 "punkt", "brown"
])

#Calculates the urgency of the sttudents text input and prints the corresponding mesasage 
def Urgency(NLPResult, Res):
    if((NLPResult >= float(-1)) & (NLPResult <= float(1))):
        urgent = pow((NLPResult - (pow(1.5, 1/2) - 1)), 2) + ((-pow((-0.5-(pow(1.5, 1/2) - 1)), 2)) + 1)

        isMildlyConcerning = (urgent >= float(0.8))
        isUrgent = (urgent >= float(1))
        isCritical = (urgent >= float(1.5))
        
        if (isMildlyConcerning):
            if (isUrgent):
                if (isCritical):
                    print("Critical and Negative")
                    ## Send email alerting the critical conditions of the student (marked as important)
                elif (max(Res) == Res[0] or NLPResult < 0):
                    print("Urgent and Negative")
                    ## Send email stating that the student is feeling depressed (marked as important)
                elif (max(Res) == Res[2] or NLPResult >0):
                    print("Urgent and Positive")
                    ## Send email stating that the student is doing extremely well (marked as important)
            elif(max(Res) == Res[0] or NLPResult < 0):
                print("Mildly concerning and Negative")
                ## Send email saying student is feeling down, but nothing alarming
            elif(max(Res) == Res[2] or NLPResult > 0):
                print("Mildly concerning and Positive")
                ## Send email is feeling quite happy
        else:
            print("Nothing special about students result")
            ## No need to send email


def toke_corp(filename):
    corpus = open(filename,'r')

    sent_list = sent_tokenize(corpus.read() )

    return sent_list


def textCreate():
    original_stdout = sys.stdout        
    with open('filename.txt', 'w') as f:
        sys.stdout = f                     # Change the standard output to the file we created.
        for sent in brown.sents('A01'):       
            print(' '.join(sent))
        sys.stdout = original_stdout 


def is_positive(sentence: str) -> bool:
    sia = SentimentIntensityAnalyzer()
    """True if tweet has positive compound sentiment, False otherwise."""
    return sia.polarity_scores(sentence)["compound"] > 0

def pol_score(sentence: str) -> bool:
    sia = SentimentIntensityAnalyzer()
    return sia.polarity_scores(sentence)

def avg_sentiment(corpusST,query):
    x= 0.0 
    num_sentence = 0

    for sentence in corpusST:
        x+=pol_score(sentence)[query] 
        num_sentence+=1
    
    return x/num_sentence

def f(x):
    return pow((x - (pow(1.5, 1/2) - 1)), 2) + ((-pow((-0.5-(pow(1.5, 1/2) - 1)), 2)) + 1)


def create_graph(NLPResult,i):
    x = np.linspace(-1, 1, 100)
    plt.figure(1)

    plt.xlim(-1.1, 1.1)
    plt.ylim(-0.1, 2.1)

    area1 = np.arange(-1, -pow(1.02525512, 1/2) + pow(1.5, 1/2) - 1, 1/100)
    area2 = np.arange(-pow(1.02525512, 1/2) + pow(1.5, 1/2) - 1, -0.5, 1/100)
    area3 = np.arange(-0.5 , -pow(0.27525512, 1/2) + pow(1.5, 1/2) - 1, 1/100)
    area4 = np.arange(-pow(0.27525512, 1/2) + pow(1.5, 1/2) - 1, pow(0.27525512, 1/2) + pow(1.5, 1/2) - 1, 1/100)
    area5 = np.arange(pow(0.27525512, 1/2) + pow(1.5, 1/2) - 1, pow(0.52525512, 1/2) + pow(1.5, 1/2) -1 ,1/100)
    area6 = np.arange(pow(0.52525512, 1/2) + pow(1.5, 1/2) -1 , 1, 1/100)
    plt.fill_between(area1, f(area1), color = 'purple', alpha = 0.3)
    plt.fill_between(area2, f(area2), color = 'red', alpha = 0.3)
    plt.fill_between(area3, f(area3), color = 'orange', alpha = 0.3)
    plt.fill_between(area4, f(area4), color = 'yellow', alpha = 0.3)
    plt.fill_between(area5, f(area5), color = 'green', alpha = 0.3)
    plt.fill_between(area6, f(area6), color = 'blue', alpha = 0.3)
    plt.axhline(y = 0, color = 'gray')
    plt.axvline(x = 0, color = 'gray')
    plt.axhline(y = 0.75, color = 'gray', alpha = 0.2)
    plt.axhline(y = 1, color = 'gray', alpha = 0.2)
    plt.axhline(y = 1.5, color = 'gray', alpha = 0.2) 
    plt.plot(float(NLPResult), f(float(NLPResult)), marker = "o", color = 'black')
    plt.vlines(float(NLPResult), ymin = 0, ymax = f(float(NLPResult)), color = 'black', alpha = 0.6, linestyles = 'dashed')
    plt.plot(x, f(x), color = 'black')  
    plt.title('Urgency Index Graph ' + 'of File ' + str(i))  
    plt.xlabel('NLP Response')
    plt.ylabel('Urgency')
    plt.savefig('file'+str(i)+".png")
    plt.clf()

def main():
    file_array = ["./AJ_data/file1.txt","./AJ_data/file2.txt","./AJ_data/file5.txt"]
    i= 1 
    for file in file_array:
        corpusST = toke_corp(file) 
        num_array = []   

        for sentence in corpusST[:5]:
            print(("Sentence Positivty is >"), is_positive(sentence),sentence )

        avg_total = avg_sentiment(corpusST,"compound")
        avg_negative =avg_sentiment(corpusST,"neg")
        avg_neutral =avg_sentiment(corpusST,"neu")
        avg_postive =avg_sentiment(corpusST,"pos")

        #Prints sentiment values for each file in the array 
        print("Average Compound Sentiment Value =",avg_total)          
        print("Average Negative Sentiment Value ",avg_negative)
        print("Average Neutral Sentiment Value ",avg_neutral)
        print("Average Positive Sentiment Value ",avg_postive)

        #prints the level of urgency message for each file 
        num_array = [avg_negative, avg_neutral,avg_postive]
        Urgency(avg_total,num_array)
        print("\n")

        #graph creation 
        interactive(True)
        create_graph(avg_total,i)
        i+=1 




if __name__ == "__main__":
    main()










