from newsapi import NewsApiClient

# Init
newsapi = NewsApiClient(api_key='19f89cb90c154263bb7c99bded368e56')

# /v2/top-headlines
# top_headlines = newsapi.get_top_headlines(q='bitcoin',
#                                           sources='bbc-news,the-verge',
#                                           category='business',
#                                           language='en',
#                                           country='us')

# /v2/everything
all_articles = newsapi.get_everything(q='bitcoin',
                                      #   sources='bbc-news,the-verge',
                                      #   domains='bbc.co.uk,techcrunch.com',
                                      domains='billboard.com,digitalmusicnews.com, complex.com',
                                      #   from_param='2017-12-01',
                                      #   to='2017-12-12',
                                      language='en',
                                      #   sort_by='relevancy',
                                      sort_by='popularity',
                                      page=2)
print(all_articles)

# /v2/sources
# sources = newsapi.get_sources()
