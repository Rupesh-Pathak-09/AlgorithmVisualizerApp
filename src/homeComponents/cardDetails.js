import graph from "./images/graph.png";
import primes from "./images/primes.jpg";
import sort from "./sort.png";
import queen from "./images/queen.PNG";
import binSearch from "./images/binaryTree.png";
export function getDetails(){
   return [
       {
           id:1,
           title:"Pathfinder",
           route:"/pathfinder",
           img:graph
       },
       {
           id:2,
           title:"Prime Numbers",
           route:"/prime",
           img:primes
       },
       {
           id:3,
           title:"Sorting Algorithm",
           route:"/sort",
           img:sort
       },
       {
           id:9,
           title:"Recursive Sorting",
           route:"/recursivesort",
           img:sort
       },
       {
           id:4,
           title:"N Queen",
           route:"/nqueen",
           img:queen
       },
       {
           id:7,
           title:"Binary Search",
           route:"/binarysearch",
           img:binSearch
       }
   ]
}