import os
from flask import Blueprint, jsonify, request
from newsapi import NewsApiClient
from datetime import date

nu_news = Blueprint('nunews', __name__)


@nu_news.route("/")
def index():
    today = date.today()
    this_day = today.strftime("%Y-%m-%d")
    # Init
    NEWS_KEY = os.environ.get("NEWS_KEY")
    newsapi = NewsApiClient(api_key=NEWS_KEY)

    # /v2/top-headlines
    # top_headlines = newsapi.get_top_headlines(q='music',
    #                                           #   sources='bbc-news,the-verge',
    #                                           #   category='business',
    #                                           #   category='entertainment',
    #                                           language='en',
    #                                           country='us')

    # /v2/everything
    all_articles = newsapi.get_everything(q='music',
                                          #   sources='bbc-news,the-verge',
                                          #   domains='bbc.co.uk,techcrunch.com',
                                          #   domains='billboard.com,digitalmusicnews.com, complex.com',
                                          #   from_param='2017-12-01',
                                          from_param=this_day,
                                          #   to='2017-12-12',
                                          language='en',
                                          #   sort_by='relevancy',
                                          sort_by='popularity',
                                          #   page=2
                                          )
    print("-------------------------------------------------")
    print(all_articles)
    print("-------------------------------------------------")
    return(all_articles)
    # print(top_headlines)

    # /v2/sources
    # sources = newsapi.get_sources()
