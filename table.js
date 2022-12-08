const names = ["Anakin", "Obi-Wan", "Luke", "Leia"];
    function displaytable() {
        if (dat.innerHTML != 'Table should display here') {
            dat.innerHTML = 'Table should display here';
            btn.innerHTML = 'Click me to see the table';
            return
        }
        var tdata = `<table>
                            <thead>
                                <tr>
                                    <th>Sl. No</th>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <tbody>`
        for (var i = 0; i < names.length; i++) {
            tdata += `<tr>
                        <td>${i + 1}</td>
                        <td>${names[i]}</td>
                        </tr>`
        }
        tdata += `</tbody>
                    </table>
                `
        document.getElementById('dat').innerHTML = tdata;
        btn.innerHTML = 'Click me to hide the table';
    }