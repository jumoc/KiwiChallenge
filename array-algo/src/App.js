import logo from './logo.svg';
import './App.css';
import ArrayInput from './ArrayInput';

function App() {
  return (
    <div className="App">
      <section className="App-section">
        <img src='https://befootec.de/wp-content/uploads/2018/06/squarelogo_fullcolor-1.png' class='Image-logo' />
        <h1>How was this algorithm created?</h1>
        <p>
          The objective of this algorithm is that by having an array with N
          positions find the index in that array where the sum
          of the left subarray and the right subarray are the same
        </p>

        <p>
          The approach whit this algorithm is to have two indexes, left (starting at 0) and right (starting at N - 1),
          and two accumulators to add all the values of the left subarray <i>(left sum)</i> and right subarray <i>(right sum)</i>.
        </p>
        <p>
          I started by iterating the array until the left index becomes equal or greater than the right index, inside this loop I started adding up the values of the
          left subarray and the right subarray to check wether I need to move the left index or the right index (to have the sum of the sub arrays as equal as possible).
          In the loop I check if the left sum is less than the right sum, if it is smaller I move the left index until the left sum is greater
          or equal to the right sum, the same goes for the right sum.
        </p>
        <p>
          And then move both indexes so there's no problem if both sums are equal and the indexes have not met.
        </p>
        <div className='Image-container'>
          <img src='https://media4.giphy.com/media/yirQ4FwC2N1B1qCXcx/giphy.gif?cid=790b7611ddff41154064af31c0b90023d164f509480e1884&rid=giphy.gif&ct=g'></img>
        </div>
        <p>
          At the end I check wether the sum and the indexes are equal, if they are it means we've found the index in which both sub array's sums are equal,
          but there's two more checks to get some special cases, like if the left and right sums are equal and the indexes are not equal but adjacent or if the indexes are already equal
          but the loop is still iterating (which means it will move the indexes more than needed)
        </p>
        <div className='Search-section' >
          <p>Time to test the algorithm!</p>
          <p>Just enter the numbers separated by a space <strong>Eg: 2 1 2 1 3 2</strong></p>
          <ArrayInput />
        </div>
      </section>
    </div >
  );
}

export default App;
