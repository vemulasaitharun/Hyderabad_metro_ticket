

function fare(event) {
    // Get the select elements
    
    event.preventDefault();
    var from = document.getElementById('from');
    var to = document.getElementById('To');

    // Get the selected indices
    var fromIndex = from.selectedIndex;
    var toIndex = to.selectedIndex;

    function shortestPath(adj, N, src, dest) {
        var dist = new Array(N);
        for (var i = 0; i < N; i++)
            dist[i] = 1000000000;
    
        var q = [];
        dist[src] = 0;
        q.push(src);
    
        while (q.length > 0) {
            var node = q.shift();
    
            for (var it of adj[node]) {
                if (dist[node] + 1 < dist[it]) {
                    dist[it] = dist[node] + 1;
                    q.push(it);
                }
            }
        }
        
        var stations = ["LBnagar", "Victoria_memorial", "chaitanyapuri", "Dilshukhnagar", "moosrambagh", "NewMarket", "malakpet", "MGbusstation", "Osmania_medical", "Gandhibhavan", "Nampally", "Assembly", "Lakdikapool", "Khairtabad", "Irrummanzil", "Panjagutta", "Ameerpet", "SRnagar", "ESIhospital", "Erragadda", "Bharatnagar", "Moosapet", "DR_BRambedkar", "Kukatpally", "KPHBcolony", "JNTUcollege", "Miyapur", "Sultanbazar", "Narayanguda", "Chikkadpali", "RTCxroads", "Musheerabad", "Gandhihospital", "Secbadwest", "Paradeground", "Nagole", "Uppal", "stadium", "NGRI", "Habsiguda", "Tarnaka", "Mettuguda", "Secbadeast", "Paradise", "Rasoolpura", "PrakashNagar", "Begumpet", "MathuraNagar", "Yusufguda", "Jubliehills", "JH-checkpost", "Peddamagudi", "Madhapur", "Dugamcheruvu", "Hitechcity", "raidurg"];
        return dist[dest];
    }
    
    var n = 56;
    var adj = [];
    for (var i = 0; i < n; i++) {
        adj.push([]);
    }
    
    // LB NAGAR TO MIYAPUR
    adj[0].push(1);
    for (var i = 1; i <= 7; i++) {
        adj[i].push(i - 1);
        adj[i].push(i + 1);
    }
    
    adj[8].push(7);
    adj[8].push(27);
    adj[8].push(9);
    
    for (var i = 9; i <= 15; i++) {
        adj[i].push(i - 1);
        adj[i].push(i + 1);
    }
    
    adj[16].push(15);
    adj[16].push(46);
    adj[16].push(17);
    adj[16].push(47);
    
    for (var i = 17; i <= 25; i++) {
        adj[i].push(i - 1);
        adj[i].push(i + 1);
    }
    
    adj[26].push(25);
    
    // MG Bus Station line
    adj[27].push(9);
    adj[27].push(28);
    
    for (var i = 28; i <= 33; i++) {
        adj[i].push(i - 1);
        adj[i].push(i + 1);
    }
    
    adj[34].push(42);
    adj[34].push(33);
    adj[34].push(43);
    
    // NAGOLE TO RAIDURG
    adj[35].push(36);
    
    for (var i = 36; i <= 41; i++) {
        adj[i].push(i - 1);
        adj[i].push(i + 1);
    }
    
    adj[42].push(41);
    adj[42].push(34);
    
    adj[43].push(34);
    adj[43].push(44);
    
    for (var i = 44; i <= 54; i++) {
        adj[i].push(i - 1);
        adj[i].push(i + 1);
    }
    
    adj[55].push(54);
    
    var stations = ["LBnagar", "Victoria_memorial", "chaitanyapuri", "Dilshukhnagar", "moosrambagh", "NewMarket", "malakpet", "MGbusstation", "Osmania_medical", "Gandhibhavan", "Nampally", "Assembly", "Lakdikapool", "Khairtabad", "Irrummanzil", "Panjagutta", "Ameerpet", "SRnagar", "ESIhospital", "Erragadda", "Bharatnagar", "Moosapet", "DR_BRambedkar", "Kukatpally", "KPHBcolony", "JNTUcollege", "Miyapur", "Sultanbazar", "Narayanguda", "Chikkadpali", "RTCxroads", "Musheerabad", "Gandhihospital", "Secbadwest", "Paradeground", "Nagole", "Uppal", "stadium", "NGRI", "Habsiguda", "Tarnaka", "Mettuguda", "Secbadeast", "Paradise", "Rasoolpura", "PrakashNagar", "Begumpet", "MathuraNagar", "Yusufguda", "Jubliehills", "JH-checkpost", "Peddamagudi", "Madhapur", "Dugamcheruvu", "Hitechcity", "raidurg"];
    
    
    
    
    
    
    
    
    
  
   var s_path = shortestPath(adj, n, fromIndex, toIndex);
   if(s_path>=12)
   {
    var cost=60;
    
   }
   else
   {
    var cost=s_path*5;
   }
    if (s_path!== 0) {
        
       var form = document.getElementById('form');
       var from1= from.value;
       var to1 =to.value;
       localStorage.setItem("from3",from1);
       localStorage.setItem("to3",to1);

       localStorage.setItem("cost1","₹"+cost+"/-");

       location.href='ticket.html';
        
    } 
    else {
      document.getElementById("msg").innerHTML=" ! please choose different stations";
        
    }
    
};
