<table>
 <tbody>
  <tr>
   <th>Precedence</th>
   <th>Operator type</th>
   <th>Associativity</th>
   <th>Individual operators</th>
  </tr>
  <tr>
   <td>21</td>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Grouping">Grouping</a></td>
   <td>n/a</td>
   <td><code>( … )</code></td>
  </tr>
  <tr>
   <td colspan="1" rowspan="5">20</td>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors#Dot_notation">Member Access</a></td>
   <td>left-to-right</td>
   <td><code>… . …</code></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors#Bracket_notation">Computed Member Access</a></td>
   <td>left-to-right</td>
   <td><code>… [ … ]</code></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/new"><code>new</code></a> (with argument list)</td>
   <td>n/a</td>
   <td><code>new … ( … )</code></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/JavaScript/Guide/Functions">Function Call</a></td>
   <td>left-to-right</td>
   <td><code>… ( <var>… </var>)</code></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining">Optional chaining</a></td>
   <td>left-to-right</td>
   <td><code>?.</code></td>
  </tr>
  <tr>
   <td rowspan="1">19</td>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/new"><code>new</code></a> (without argument list)</td>
   <td>right-to-left</td>
   <td><code>new …</code></td>
  </tr>
  <tr>
   <td rowspan="2">18</td>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment">Postfix Increment</a></td>
   <td colspan="1" rowspan="2">n/a</td>
   <td><code>… ++</code></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Decrement">Postfix Decrement</a></td>
   <td><code>… --</code></td>
  </tr>
  <tr>
   <td colspan="1" rowspan="10">17</td>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT">Logical NOT (!)</a></td>
   <td colspan="1" rowspan="10">right-to-left</td>
   <td><code>! …</code></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT">Bitwise NOT (~)</a></td>
   <td><code>~ …</code></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus">Unary plus (+)</a></td>
   <td><code>+ …</code></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Unary_negation">Unary negation (-)</a></td>
   <td><code>- …</code></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment">Prefix Increment</a></td>
   <td><code>++ …</code></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Decrement">Prefix Decrement</a></td>
   <td><code>-- …</code></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/typeof"><code>typeof</code></a></td>
   <td><code>typeof …</code></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/void"><code>void</code></a></td>
   <td><code>void …</code></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/delete"><code>delete</code></a></td>
   <td><code>delete …</code></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/await"><code>await</code></a></td>
   <td><code>await …</code></td>
  </tr>
  <tr>
   <td>16</td>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation">Exponentiation (**)</a></td>
   <td>right-to-left</td>
   <td><code>… ** …</code></td>
  </tr>
  <tr>
   <td rowspan="3">15</td>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication">Multiplication (*)</a></td>
   <td colspan="1" rowspan="3">left-to-right</td>
   <td><code>… * …</code></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Division">Division (/)</a></td>
   <td><code>… / …</code></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Remainder">Remainder (%)</a></td>
   <td><code>… % …</code></td>
  </tr>
  <tr>
   <td rowspan="2">14</td>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Addition">Addition (+)</a></td>
   <td colspan="1" rowspan="2">left-to-right</td>
   <td><code>… + …</code></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction">Subtraction (-)</a></td>
   <td><code>… - …</code></td>
  </tr>
  <tr>
   <td rowspan="3">13</td>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift">Bitwise Left Shift (&lt;&lt;)</a></td>
   <td colspan="1" rowspan="3">left-to-right</td>
   <td><code>… &lt;&lt; …</code></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift">Bitwise Right Shift (&gt;&gt;)</a></td>
   <td><code>… &gt;&gt; …</code></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift">Bitwise Unsigned Right Shift (&gt;&gt;&gt;)</a></td>
   <td><code>… &gt;&gt;&gt; …</code></td>
  </tr>
  <tr>
   <td rowspan="6">12</td>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Less_than">Less Than (&lt;)</a></td>
   <td colspan="1" rowspan="6">left-to-right</td>
   <td><code>… &lt; …</code></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal">Less Than Or Equal (&lt;=)</a></td>
   <td><code>… &lt;= …</code></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than">Greater Than (&gt;)</a></td>
   <td><code>… &gt; …</code></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal">Greater Than Or Equal (&gt;=)</a></td>
   <td><code>… &gt;= …</code></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/in"><code>in</code></a></td>
   <td><code>… in …</code></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/instanceof"><code>instanceof</code></a></td>
   <td><code>… instanceof …</code></td>
  </tr>
  <tr>
   <td rowspan="4">11</td>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Equality">Equality (==)</a></td>
   <td colspan="1" rowspan="4">left-to-right</td>
   <td><code>… == …</code></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Inequality">Inequality (!=)</a></td>
   <td><code>… != …</code></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality">Strict Equality (===)</a></td>
   <td><code>… === …</code></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality">Strict Inequality (!==)</a></td>
   <td><code>… !== …</code></td>
  </tr>
  <tr>
   <td>10</td>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND">Bitwise AND (&amp;)</a></td>
   <td>left-to-right</td>
   <td><code>… &amp; …</code></td>
  </tr>
  <tr>
   <td>9</td>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR">Bitwise XOR (^)</a></td>
   <td>left-to-right</td>
   <td><code>… ^ …</code></td>
  </tr>
  <tr>
   <td>8</td>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR">Bitwise OR (|)</a></td>
   <td>left-to-right</td>
   <td><code>… | …</code></td>
  </tr>
  <tr>
   <td>7</td>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND">Logical AND (&amp;&amp;)</a></td>
   <td>left-to-right</td>
   <td><code>… &amp;&amp; …</code></td>
  </tr>
  <tr>
   <td>6</td>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR">Logical OR (||)</a></td>
   <td>left-to-right</td>
   <td><code>… || …</code></td>
  </tr>
  <tr>
   <td>5</td>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator">Nullish coalescing operator (??)</a></td>
   <td>left-to-right</td>
   <td><code>… ?? …</code></td>
  </tr>
  <tr>
   <td>4</td>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator">Conditional (ternary) operator</a></td>
   <td>right-to-left</td>
   <td><code>… ? … : …</code></td>
  </tr>
  <tr>
   <td rowspan="16">3</td>
   <td rowspan="16"><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators">Assignment</a></td>
   <td rowspan="16">right-to-left</td>
   <td><code>… = …</code></td>
  </tr>
  <tr>
   <td><code>… += …</code></td>
  </tr>
  <tr>
   <td><code>… -= …</code></td>
  </tr>
  <tr>
   <td><code>… **= …</code></td>
  </tr>
  <tr>
   <td><code>… *= …</code></td>
  </tr>
  <tr>
   <td><code>… /= …</code></td>
  </tr>
  <tr>
   <td><code>… %= …</code></td>
  </tr>
  <tr>
   <td><code>… &lt;&lt;= …</code></td>
  </tr>
  <tr>
   <td><code>… &gt;&gt;= …</code></td>
  </tr>
  <tr>
   <td><code>… &gt;&gt;&gt;= …</code></td>
  </tr>
  <tr>
   <td><code>… &amp;= …</code></td>
  </tr>
  <tr>
   <td><code>… ^= …</code></td>
  </tr>
  <tr>
   <td><code>… |= …</code></td>
  </tr>
  <tr>
   <td><code>… &amp;&amp;= …</code></td>
  </tr>
  <tr>
   <td><code>… ||= …</code></td>
  </tr>
  <tr>
   <td><code>… ??= …</code></td>
  </tr>
  <tr>
   <td rowspan="2">2</td>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/yield"><code>yield</code></a></td>
   <td colspan="1" rowspan="2">right-to-left</td>
   <td><code>yield …</code></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/yield*"><code>yield*</code></a></td>
   <td><code>yield* …</code></td>
  </tr>
  <tr>
   <td>1</td>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator">Comma / Sequence</a></td>
   <td>left-to-right</td>
   <td><code>… , …</code></td>
  </tr>
 </tbody>
</table>