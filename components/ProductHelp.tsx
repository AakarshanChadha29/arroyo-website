'use client';

import { useState } from 'react';
import { productSuggestedQuestions } from '@/content/site';
import { Button, Card } from '@/components/ui';

/**
 * Keyword-based answers from /api/product-help + lib/knowledge.
 * Does not call external LLMs; will not invent certifications or compliance facts.
 */
export function ProductHelp() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  async function submitQuestion(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setAnswer('');

    try {
      const res = await fetch('/api/product-help', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question })
      });
      const data = await res.json();
      setAnswer(data.answer || 'No matching summary. Use the contact form for a direct reply.');
    } catch {
      setAnswer('We could not load a summary. Please call or email us.');
    } finally {
      setLoading(false);
    }
  }

  function useSuggested(q: string) {
    setQuestion(q);
    setAnswer('');
  }

  return (
    <Card as="section" className="assistant assistant--premium">
      <div className="section-copy">
        <span className="eyebrow">Product questions</span>
        <h2>Orient fast—then talk to a human</h2>
        <p>
          Drop a short question and we’ll match it to our internal product notes. It’s a quick way to see which line might fit
          before you move to specs, compliance packs, or pricing on the contact form.
        </p>
        <div className="prompt-chips" role="group" aria-label="Suggested questions">
          {productSuggestedQuestions.map((q) => (
            <button key={q} type="button" className="prompt-chip" onClick={() => useSuggested(q)}>
              {q}
            </button>
          ))}
        </div>
      </div>
      <form onSubmit={submitQuestion} className="assistant-form">
        <label className="contact-label" htmlFor="product-help-q">
          Your question
        </label>
        <textarea
          id="product-help-q"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          rows={4}
          placeholder="e.g. Hotel pool system sizing, or IonEdge for travel"
        />
        <Button type="submit" disabled={loading}>
          {loading ? 'Searching…' : 'Get summary'}
        </Button>
      </form>
      {answer ? (
        <div className="assistant-answer">
          <strong>Summary:</strong> {answer}
        </div>
      ) : null}
      <p className="disclaimer-note">
        Summaries come from fixed in-house notes—not a generative model. They don’t replace quotations, certified documents, or
        legal review.
      </p>
    </Card>
  );
}
