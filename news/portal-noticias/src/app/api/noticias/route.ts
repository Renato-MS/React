import { NextResponse } from 'next/server';
import Parser from 'rss-parser';
import axios from 'axios';

const parser = new Parser();

export async function GET() {
  try {
    const { data } = await axios.get('https://g1.globo.com/rss/g1/', {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    });

    const feed = await parser.parseString(data);

    const noticias = feed.items.slice(0, 10).map((item) => ({
      title: item.title,
      link: item.link,
      summary: item.contentSnippet,
      source: feed.title
    }));

    return NextResponse.json(noticias);
  } catch (err) {
    console.error("Erro no parser:", err);
    return NextResponse.json({ error: 'Erro ao carregar feed' }, { status: 500 });
  }
}
